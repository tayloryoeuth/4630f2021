# HouseBuddyReact
## Application: House Buddy
## Team Members: Taylor Yoeuth and Eddie Tran
## Mobile App Development - COMP.4630 - Fall 2021
## Professor Haim Levkowitz
## December 2, 2021
### House Buddy

### Goal
  Our project is targeted towards new homeowners who are unsure of items to buy for their newly purchased home. HouseBuddy minimizes the task of having 12 different tabs open for one specific item. In our mobile application, we made it so users can dedicate each room for certain items in that specific room. The user then will go into “Master Bedroom” which will showcase items such as lamps, dressers, etc. and then will allow the user to click on the image to bring them to the Amazon app on their phone. This allows users to have a curated list of household items without forgetting about the basic necessities a person may want in their household.
</br>
### Alternative Approaches
Programming Language - Java, Kotlin, JavaScript </br>
IDE - Android Studio, Visual Studio Code </br>
Tools - Expo Go </br>
	
### Chosen Approaches
Language Approach - At first, we went with Java, however, we have ultimately chosen JavaScript to be our language. </br>
IDE - At first, we picked Android studio, but ultimately chose Visual Studio Code. </br>
Tools - Expo Go </br>

### Why we Chose this Approach
Language Approach - We decided to go with JavaScript because of React Native and Expo. React Native is a framework that builds mobile apps for iOS and Android. Expo works along with React Native as a set of tools that allows for real-time debugging. We found that it is much more efficient to work with React Native than Java in Android Studio. </br>
IDE - Visual Studio Code is simple yet functional. Easy to learn. </br>
Tools - Expo Go is built for React Native, Great real-time developer tool. </br>

### Launch Instructions
* Use your favorite IDE and have the HouseBuddy folder installed (Visual Studio Code Preferred). </br>
Install nodejs (must be LTS version): https://nodejs.org/en/download/  </br>
Open up the terminal, and install necessary packages. </br>
Packages include (IN THIS ORDER): 
 1. npm install </br>
 2. npm install --global expo-cli </br>
 3. npm install react-native-gesture-handler </br>
 4. npm install react-native-safe-area-context </br>
 5. npm install react-native-tab-view </br>
 6. npm install @react-navigation/native </br>
 7. npm install @react-navigation/stack </br>
 8. npm install @react-navigation/native-stack </br>
 9. npm install @react-navigation/material-top-tabs </br>
 10. npm install @react-navigation/bottom-tabs </br>
 11. npm install @react-navigation/core </br>
 12. npm install --save @react-native-firebase/app </br>
Once those packages are installed, you are now ready to start the application. </br>
In your terminal, write “npm start”, once you have successfully done so, you will see an expo client which will give you a QR code to scan on your phone. </br>
If you do not see a QR prompted, please make sure you installed the necessary packages and read the terminal log to see missing packages. </br>
Note: In order to use this QR code the user must have Expo Go installed on your phone. It can be downloaded from the Google Play Store on Android or the App Store on iOS. </br>
Open the Expo Go application on your phone, and then open up your camera on your phone and scan the QR code. Make sure you have the Expo Go application open BEFORE scanning the QR code. </br>
If you successfully can see HouseBuddy and a login screen then you have successfully launched our application </br>
Enjoy! </br>

### How to use House Buddy?
Once the app starts you should be prompted to login. If you have an account already, then sign in with your password and email. If not, Enter your email and password and hit “Register”, after doing so you will then be introduced to our main application. </br>
In the Home tab you should be prompted with 9 different rooms, which all hold different items for them. In the Master Bedroom it will hold items such as a bed, dresser, bedsheets and more. You can scroll down and click on an item, which will then bring you to Amazon to purchase your item. This is continuous throughout all the rooms.</br>
In the Favorites tab, you are able to add items onto the list. After you have purchased the item, you are allowed to delete it by clicking on the item in the list. We have not implemented a way to click on the item to bring you to Amazon to purchase it, but in the future we plan on doing so. </br>
In the Browse tab, we planned on having a user browser to be used within the app to make shopping easier, but we will plan on doing it in the future. </br>
In the Profile tab, you should see the email you registered with in Step 1. You are also able to logout, and resign back in.  </br>
In the Settings tab, this would have been where we would have a contact form if there were any issues within the application. However we did not have enough time to implement this, but plan on doing so in the future. </br>

### Source Code
FINAL SOURCE CODE: https://github.com/tayloryoeuth/4630f2021/tree/main/Course%20Project/HouseBuddyReactFINAL </br>
Project’s stages of HouseBuddy Code: https://github.com/tayloryoeuth/4630f2021/tree/main/Course%20Project </br>

### Database
Firebase </br>
https://firebase.google.com/ </br>

### .apk Executable
Not available because we are hosting our project using react-native so works on both android and ios. Hope we do not get points taken off for this.
