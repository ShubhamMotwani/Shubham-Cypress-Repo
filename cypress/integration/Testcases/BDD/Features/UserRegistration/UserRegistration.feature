Feature: User Registration
    
    This feature is for validating the New user Registration workflows and related functionality. 

    Background: Login to the application and navigate to User Registration Page
        When Select element "Create an Account Link" on "Home Page"
        Then Verify that URL contains "account/create/"

    @LaunchApplication
    Scenario: To Verify the New User Registration Workflow
       When Store Randomly generated "First Name" in context "context_FirstName"
       And Store Randomly generated "Last Name" in context "context_LastName"
       And Generate Random "Email" Where firstname is "context_FirstName" and Last name is "context_LastName" and Store it in context "context_Email"
       And Store Text "TestUser@123" in context "context_Password"
       Then Verify that element "User Registration Page Heading" with text "Create New Customer Account" is visible on "User Registration Page"
       And Verify that element "Personal Information Sub Heading" with text "Personal Information" is visible on "User Registration Page"  
       When Enter text "context_FirstName" in "First Name Textbox" on "User Registration Page"
       And Enter text "context_LastName" in "Last Name Textbox" on "User Registration Page"
       And Scroll to view "Sign in Information Sub Heading" on "User Registration Page"
       Then Verify that element "Sign in Information Sub Heading" with text "Sign-in Information" is visible on "User Registration Page"  
       When Enter text "context_Email" in "Email Textbox" on "User Registration Page"
       When Enter text "context_Password" in "Password Textbox" on "User Registration Page"
       Then Verify that element "Password Strength Meter" with text "Very Strong" is visible on "User Registration Page"  
       And Enter text "context_Password" in "Confirm Password Textbox" on "User Registration Page"
       Then Verify enability that "Create an Account Button" is "Enabled" on "User Registration Page"
       When Select element "Create an Account Button" on "User Registration Page"
       Then Verify that element "My Account Heading" with text "My Account" is visible on "Profile Page"
       And Verify that element "Message After Registration" with text "Thank you for registering with Main Website Store." is visible on "Profile Page"
       And Verify CSS that "Message After Registration" to have CSS Property "color" with value as "rgb(0, 100, 0)" on "Profile Page"
       And Verify that "Contact Information" contains text "context_FirstName" on "Profile Page"
       And Verify that "Contact Information" contains text "context_LastName" on "Profile Page"
       And Verify that "Contact Information" contains text "context_Email" on "Profile Page"
       Then Verify Greet Message for First Name "context_FirstName" and Last Name "context_LastName"

    @LaunchApplication
    Scenario: To Verify All Mandotory Fields with Valid Email Validations
       When Enter text "Test LastName" in "Last Name Textbox" on "User Registration Page"
       And Scroll to view "Sign in Information Sub Heading" on "User Registration Page"
       When Enter text "test@gmail.com" in "Email Textbox" on "User Registration Page"
       And Enter text "TestUser@123" in "Password Textbox" on "User Registration Page"
       Then Verify that element "Password Strength Meter" with text "Very Strong" is visible on "User Registration Page"  
       And Enter text "TestUser@123" in "Confirm Password Textbox" on "User Registration Page"
       Then Verify enability that "Create an Account Button" is "Enabled" on "User Registration Page"
       When Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "First Name Textbox" on "User Registration Page"
       Then Verify that element "Error message - First Name" with text "This is a required field." is visible on "User Registration Page"
       When Enter text "Test FirstName" in "First Name Textbox" on "User Registration Page"
       And Clear Text from "Last Name Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "Last Name Textbox" on "User Registration Page"
       Then Verify that element "Error message - Last Name" with text "This is a required field." is visible on "User Registration Page"
       When Enter text "Test LastName" in "Last Name Textbox" on "User Registration Page"
       And Clear Text from "Email Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "Email Textbox" on "User Registration Page"
       Then Verify that element "Error message - Email" with text "This is a required field." is visible on "User Registration Page"
       When Enter text "test" in "Email Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "Email Textbox" on "User Registration Page"
       Then Verify that element "Error message - Email" with text "Please enter a valid email address (Ex: johndoe@domain.com)." is visible on "User Registration Page"
       When Enter text "MyAutomationUser123@gmail.com" in "Email Textbox" on "User Registration Page"
       And Clear Text from "Password Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "Password Textbox" on "User Registration Page"
       Then Verify that element "Error message - Password" with text "This is a required field." is visible on "User Registration Page"
       Then Verify that element "Error message - Confirm Password" with text "Please enter the same value again." is visible on "User Registration Page"
       And Enter text "TestUser@123" in "Password Textbox" on "User Registration Page"
       And Clear Text from "Confirm Password Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       And Scroll to view "Confirm Password Textbox" on "User Registration Page"
       Then Verify that element "Error message - Confirm Password" with text "This is a required field." is visible on "User Registration Page"
   

    @LaunchApplication
    Scenario: To Verify Error Message when User enters already registered Email Address
       When Enter text "Test FirstName" in "First Name Textbox" on "User Registration Page"
       And Enter text "Test LastName" in "Last Name Textbox" on "User Registration Page"
       And Scroll to view "Sign in Information Sub Heading" on "User Registration Page"
       When Enter text "test@gmail.com" in "Email Textbox" on "User Registration Page"
       When Enter text "TestUser@123" in "Password Textbox" on "User Registration Page"
       Then Verify that element "Password Strength Meter" with text "Very Strong" is visible on "User Registration Page"  
       And Enter text "TestUser@123" in "Confirm Password Textbox" on "User Registration Page"
       Then Verify enability that "Create an Account Button" is "Enabled" on "User Registration Page"
       When Select element "Create an Account Button" on "User Registration Page"
       Then Verify that element "Message After Registration" with text "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account." is visible on "Profile Page"
       And Verify CSS that "Message After Registration" to have CSS Property "color" with value as "rgb(224, 43, 39)" on "Profile Page"
       

     @LaunchApplication
    Scenario: To Verify Password Complexity and Password Strength Meter validations
       When Enter text "Test" in "Password Textbox" on "User Registration Page"
       And Select element "Create an Account Button" on "User Registration Page"
       Then Verify that element "Error message - Password" with text "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored." is visible on "User Registration Page"
       When Enter text "TestTestTest" in "Password Textbox" on "User Registration Page"
       Then Verify that element "Error message - Password" with text "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters." is visible on "User Registration Page"
       When Enter text "TestTestTest2" in "Password Textbox" on "User Registration Page"
       Then Verify visibility that "Error message - Password" is "Not Displayed" on "User Registration Page"
       And Verify that element "Password Strength Meter" with text "Weak" is visible on "User Registration Page"
       When Enter text "Test1234" in "Password Textbox" on "User Registration Page"
       Then Verify visibility that "Error message - Password" is "Not Displayed" on "User Registration Page"
       And Verify that element "Password Strength Meter" with text "Medium" is visible on "User Registration Page"
       When Enter text "Test@User" in "Password Textbox" on "User Registration Page"
       Then Verify visibility that "Error message - Password" is "Not Displayed" on "User Registration Page"
       And Verify that element "Password Strength Meter" with text "Strong" is visible on "User Registration Page"
       When Enter text "AutomerUser@123" in "Password Textbox" on "User Registration Page"
       Then Verify visibility that "Error message - Password" is "Not Displayed" on "User Registration Page"
       And Verify that element "Password Strength Meter" with text "Very Strong" is visible on "User Registration Page"
  
  
 