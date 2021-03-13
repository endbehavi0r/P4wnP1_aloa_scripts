#!/bin/bash
git clone https://github.com/SecureAuthCorp/impacket /opt/impacket
pip3 install /opt/impacket # this takes some time
mkdir /opt/loot
chown nobody:nogroup /opt/loot
# otherwise we won't be able to write data to it during the exfiltration
