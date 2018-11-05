# Missing and Murdered Indigenous Women

This one page inforgaphic website highlights a big issue in Canada - Missing and Murdered Indigenous Women (MMIW).
The site provides some alarming statistics that are important to understanding this issue.

## Getting Started

There was a lot of research that went into this infographic. 
Visit these sites to learn more about MMIW:
* http://www.mmiwg-ffada.ca/
* https://www.cbc.ca/missingandmurdered/
* https://www.huffingtonpost.ca/news/mmiw/

## Installing

Works best on Google Chrome.
MAMP or WAMP is also needed for this.
To install, open your command line. Terminal for Mac or Command Prompt for Windows.

```
# Pick the location of where this repository will be downloaded, 
for example purposes this will be on your desktop

$ cd Desktop

# Clone this repository into your local machine

$ git clone https://github.com/jobaile/Baile_Joanna_HW3_infographic
```

###Database Installation
```
# MAMP, WAMP, XAMPP
$ Open application and turn on servers

# Creating a database
$ Go into PHPMyAdmin and create a database called "db_infographic"

# Importing database
$ Import db_infographic.sql into your database

# Edit configurations
$ Inside includes/config.php, make sure the settings are correct for localhost, root, pw, and db 

# htdocs or WWW
$ Drag the folder into your htdocs or WWW folder 

# Run through localhost
$ Go through your localhost and find Baile_Joanna_HW3_Infographic
```

And you’re done!

## Built With

* [Bootstrap](https://getbootstrap.com/) - Framework
* [SASS](https://sass-lang.com/) - CSS

## Authors

* [**Joanna Baile**](https://github.com/jobaile) - Developer and Designer