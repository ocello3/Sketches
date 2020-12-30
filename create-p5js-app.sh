#!/bin/zsh

sed -i -e "50,50s:<tbody>:
 <tbody>\n        <tr>\n          <td>$1</td>\n          <td><a href="20201130/pub/app.html">$2</a></td>\n          <td><a href="https://github.com/ocello3/Sketches/tree/master/$1/src">GitHub</a></td>\n        </tr>\n      </tbody>\n      <tbody>" index.html
# wait
# cp -r template $1
# wait
# cd $1
# wait
# npm run preinstall
# wait
# npm install

