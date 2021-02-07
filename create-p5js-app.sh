#!/bin/zsh

LINE1='<tbody>'
LINE2='				<tr>'
LINE3_1='					<td>'
LINE3_3='</td>'
LINE3=$LINE3_1$1$LINE3_3
LINE4_1='					<td><a href="'
LINE4_3='/pub/app.html">'
LINE4_5='</a></td>'
LINE4=$LINE4_1$1$LINE4_3$2$LINE4_5
LINE5_1='					<td><a href="https://github.com/ocello3/Sketches/tree/master/'
LINE5_3='/src">GitHub</a></td>'
LINE5=$LINE5_1$1$LINE5_3
LINE6='				</tr>'
LINE7='			</tbody>'
LINE8='			<tbody>'
NL="\n"
AFTER=$LINE1$NL$LINE2$NL$LINE3$NL$LINE4$NL$LINE5$NL$LINE6$NL$LINE7$NL$LINE8

BEFORE='<tbody>'

sed -i '' "s~$BEFORE~$AFTER~1" ./index.html
wait
cp -r template $1
wait
cd $1
wait
npm run preinstall
wait
npm install

