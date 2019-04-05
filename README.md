# PRE-REQUISITES

1. Install Homebrew

`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

2. In terminal, run the following commands

`$ brew install node`

`$ brew install watchman`

3. Install React Native CLI

`$ npm install -g react-native-cli`

4. Download and install JDK

`https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html`

5. Download and Install XCode

`https://developer.apple.com/xcode/`

 Note: Be sure to also install xcode command line tools if not already installed

6. Download and Install Android Studio

`https://developer.android.com/studio/`

Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

Android SDK
Android SDK Platform
Performance (Intel ® HAXM) (See here for AMD)
Android Virtual Device
Then, click "Next" to install all of these components.

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

Android SDK Platform 28
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.```

7. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile config file:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

8. Type the following in a terminal:

`$ source $HOME/.bash_profile`

## Set up project from git

Clone the repo from git

`$ git clone git@github.com:SixpackLabs/Rogue.git`

Run npm install

`$ npm install`

To start the application with an Android Emulator, make sure your emulator is running first and then in the terminal:

`$ react-native run-android`

To start the application with iOS simulator, from the terminal run:

`$ react-native run-ios`
