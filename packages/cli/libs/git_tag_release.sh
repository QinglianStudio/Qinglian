#!/bin/sh

# 获取最新的tag标签
tag=$(git tag --list --sort=-version:refname "v*" | head -n 1)

# 解析版本
semver_version=${tag:1}

# 版本号自增
increment_version ()
{
  declare -a part=( ${1//\./ } )
  declare    new
  declare -i carry=1

  for (( CNTR=${#part[@]}-1; CNTR>=0; CNTR-=1 )); do
    len=${#part[CNTR]}
    new=$((part[CNTR]+carry))
    [ ${#new} -gt $len ] && carry=1 || carry=0
    [ $CNTR -gt 0 ] && part[CNTR]=${new: -len} || part[CNTR]=${new}
  done
  new="${part[*]}"
  return_value="${new// /.}"
}

increment_version "$semver_version"

echo `git tag v$return_value && git push origin v$return_value`