ionic cordova build --release android
del *.apk
zipalign -v -p 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk aligned.apk
apksigner sign --ks mytouchid-key.jks --out signed.apk aligned.apk
pause
