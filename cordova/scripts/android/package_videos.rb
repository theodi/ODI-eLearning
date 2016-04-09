#!/usr/bin/env ruby
require 'find'
require 'fileutils'
require 'zip'

wordy = false
apkName = "org.theodi.elearning1"

pwd = ARGV[0]
platformRoot = pwd + "/platforms/android"
assetsRoot = platformRoot + "/assets/www"
buildDir = platformRoot + "/build/obb"
videoSrcDir = buildDir + "/src"

FileUtils.mkdir_p videoSrcDir

puts "Searching #{assetsRoot} for components ..." if wordy
components = Find.find(assetsRoot).select { |path| path =~ /.*components\.json$/ }

components.each do |component|
  shortName = component[assetsRoot.length+1..component.length]
  puts "Checking #{shortName} for video ..." if wordy
  contents = []
  fileFound = false
  File.open(component).each_line do |line|
    if line =~ /.*\"mp4\"\: ?\".*\",$/
      videopath = line.match(/.*\"mp4\"\: ?\"(.*)\",$/)[1]
      puts "  found #{videopath}" if wordy
      if videopath =~ /\:\/\//
        puts "    but that's a reference to an external URI so let's not worry about it" if wordy
      else
        fileFound = true
        puts "    so let's get to work " if wordy
        moduleName = shortName[0..shortName.index('/')-1]
        fullVideoPath = "#{assetsRoot}/#{moduleName}/#{videopath}"
        destVideoPath = "#{videoSrcDir}/#{moduleName}/#{videopath}"
        puts "    moving #{fullVideoPath} to #{destVideoPath}" if wordy
        FileUtils.mkdir_p File.dirname(destVideoPath)
        FileUtils.mv fullVideoPath, destVideoPath

        puts "    updating json" if wordy
        line = "\"mp4\": \"content://#{apkName}/#{moduleName}/#{videopath}\","
      end
    end

    contents.push line
  end
  if fileFound
    puts "    rewriting component.json" if wordy
    File.open("#{component}", "w+").puts(contents)
  end
end

puts "Creating expansion file ..." if wordy
Zip.setup do |c|
  c.on_exists_proc = true
  c.continue_on_exists_proc = true
  c.default_compression = Zlib::NO_COMPRESSION
end
obbFileName = "#{buildDir}/main.1.#{apkName}.obb"
videos = Find.find(videoSrcDir).select { |f| !File.directory? f }
Zip::File.open(obbFileName, Zip::File::CREATE) do |zipFile|
  videos.each do |video|
    shortName = video[videoSrcDir.length+1, video.length]
    zipFile.add(shortName, video)
    puts "  added #{shortName}" if wordy
  end
end
puts "Expansion file created at #{obbFileName}"
