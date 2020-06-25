#!/bin/bash
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac
# where am i? move to where I am. This ensures source is properly sourced
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
cd ..
rm -rf node_modules/@eberlywc
mkdir node_modules/@eberlywc
# go back a level so we can snag everything
cd elements/
# walk each directory and update it's demo automatically
for project in */ ; do
  cd ${project}
  p="$(basename -- $project)"
  rm -rf node_modules
  mkdir ../../node_modules/@eberlywc/${p}
  if [ $machine == "Cygwin" ]; then
    if [ -f "${p}.js" ]; then
      symlink-dir ../../../elements/${p}/${p}.js ../../node_modules/@eberlywc/${p}/${p}.js
    fi
    if [ -d "lib" ]; then
      symlink-dir ../../../elements/${p}/lib ../../node_modules/@eberlywc/${p}/lib
    fi
    if [ -d "build" ]; then
      symlink-dir ../../../elements/${p}/build ../../node_modules/@eberlywc/${p}/build
    fi
    if [ -d "src" ]; then
      symlink-dir ../../../elements/${p}/src ../../node_modules/@eberlywc/${p}/src
    fi
    if [ -d "dist" ]; then
      symlink-dir ../../../elements/${p}/dist ../../node_modules/@eberlywc/${p}/dist
    fi
  elif [ "${machine}" == "MinGw" ]; then
    if [ -f "${p}.js" ]; then
      symlink-dir ../../../elements/${p}/${p}.js ../../node_modules/@eberlywc/${p}/${p}.js
    fi
    if [ -d "lib" ]; then
      symlink-dir ../../../elements/${p}/lib ../../node_modules/@eberlywc/${p}/lib
    fi
    if [ -d "build" ]; then
      symlink-dir ../../../elements/${p}/build ../../node_modules/@eberlywc/${p}/build
    fi
    if [ -d "src" ]; then
      symlink-dir ../../../elements/${p}/src ../../node_modules/@eberlywc/${p}/src
    fi
    if [ -d "dist" ]; then
      symlink-dir ../../../elements/${p}/dist ../../node_modules/@eberlywc/${p}/dist
    fi
  else
    if [ -f "${p}.js" ]; then
     ln -s ../../../elements/${p}/${p}.js ../../node_modules/@eberlywc/${p}/${p}.js
    fi
    if [ -d "lib" ]; then
       ln -s ../../../elements/${p}/lib ../../node_modules/@eberlywc/${p}/lib
    fi
    if [ -d "build" ]; then
       ln -s ../../../elements/${p}/build ../../node_modules/@eberlywc/${p}/build
    fi
    if [ -d "src" ]; then
       ln -s ../../../elements/${p}/src ../../node_modules/@eberlywc/${p}/src
    fi
    if [ -d "dist" ]; then
       ln -s ../../../elements/${p}/dist ../../node_modules/@eberlywc/${p}/dist
    fi
  fi
  cd ../
done