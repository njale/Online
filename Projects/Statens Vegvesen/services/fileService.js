(function ()
{
    "use strict";

    var module = angular.module("fileServices", []);
    module.factory("fileService", function ()
    {
        var settingsFile = "settingsfile.json";
        var settingsFileSize = 5000;
        var fileSystem = null;

        function readSettingsFile(successFunc, failFunc)
        {
            return readFile(settingsFile, successFunc, failFunc);
        }

        function readFile(fileName, successFunc, failFunc)
        {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, settingsFileSize,
                function () // Success
                {
                    console.log("Succeded to open file " + fileName);
                },
                failFunc);




            return fileName;
        }

        return {
            ReadSettingsfile: readSettingsFile,
            ReadFile: readFile
        };
    });





})();