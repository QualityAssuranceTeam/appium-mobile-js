#### Set ANDROID_SDK_ROOT

```
export ANDROID_SDK_ROOT={{Get path from Android Studio > SDK Manager}}
```

```
echo $ANDROID_SDK_ROOT
```

#### Start Appium Server

```
npx appium
```

or

```
npx appium -a 127.0.0.1
```

or

```
npx appium -a 127.0.0.1 -p 4723
```

#### Run tests

```
npm run wdio
```
