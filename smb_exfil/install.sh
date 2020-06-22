#!/bin/bash
apt -y install samba
mkdir -p /usr/local/P4wnP1/loot
chown nobody:nogroup /usr/local/P4wnP1/loot
echo "[e]
   comment = Documents
   browseable = yes
   writeable = yes
   printable = no
   public = yes
   read only = no
   guest ok = yes
   path = /usr/local/P4wnP1/loot/" >> /etc/samba/smb.conf
