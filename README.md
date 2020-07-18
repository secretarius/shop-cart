INSTALLING THE CODE 
The following are detailed instructions for installing the code 

0. At a command prompt, type docker --version to ensure you have version 19.03.1 or higher before proceeding.

1. Download or clone the code from this repository. 
If you download as a zip file, be sure to unzip it.
2. Navigate to the shop-master folder. 
There should be a docker-compose.yml file in this folder. 
3. In a command window (or the Command prompt in VS Code), type docker-compose up --build 
This creates a container and installs all packages from the package.json file into that container. You may see a few warnings during this process, but you should not see any errors.
The application should then compile and launch in your browser http://localhost:4201 or Access URL.
