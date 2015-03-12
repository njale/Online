(function () {
    "use strict";

    var module = angular.module("settingsServices", []);
    module.factory("settingsService", function () {
        var settingsFile = "settingsfile.json";
        var externalFailFunc;


        function readSettingsFile(successFunc, extFailFunc) {
            return readFile(settingsFile, successFunc, extFailFunc);
        }

        function readFile(fileName, successFunc, extFailFunc) {
            externalFailFunc = extFailFunc;

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, openFile, failFunc);

            function openFile(fileSystem) // Called if can retrieve filesystem
            {
                console.log("Succeded to retrieve filesystem for reading");
                fileSystem.root.getFile(fileName, { create: false, exclusive: false }, openFileEntry, failFunc);


                function openFileEntry(fileEntry) {
                    fileEntry.file(readFileContent, failFunc);

                    // Called if can open file
                    function readFileContent(file) {
                        //try
                        {
                            console.log(JSON.stringify(file));

                            console.log("Succeded to open file " + fileName + " for reading");
                            var reader = new FileReader();

                            reader.onload = function (e) {
                                console.log(JSON.stringify(e.target.result));
                                successFunc(e.target.result);
                            };

                            reader.onloaderror = function (e) {
                                failFunc(e.target.error.code);
                            };

                            reader.readAsText(file);
                        }
                        //catch (e)
                        //{
                        //    console.log(JSON.stringify(e));
                        //} 

                    }
                }
            }
        }

        function saveSettingsFile(settingsJson, successFunc, extFailFunc) {
            var settingsString = JSON.stringify(settingsJson);
            return saveFile(settingsString, settingsFile, successFunc, extFailFunc);
        }

        function saveFile(content, fileName, successFunc, extFailFunc) {
            externalFailFunc = extFailFunc;

            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, openFile, failFunc);

            function openFile(fileSystem) // Called if can retrieve filesystem
            {
                console.log("Succeded to retrieve filesystem");
                fileSystem.root.getFile(fileName, { create: true, exclusive: false }, writeFileContent, failFunc);

                // Called if can open file
                function writeFileContent(file) {
                    file.createWriter(executeWrite, failFunc);

                    function executeWrite(writer) {
                        writer.onwrite = function (e) { successFunc(e); };
                        writer.onerror = function (e) { failFunc(e.reas); };

                        writer.write(content);
                    }
                }
            }
        }

        function failFunc(result) {
            console.log("Error: " + result);
            if (result instanceof FileError)
                result = getFileError();
            else if (result instanceof ProgressEvent)
                result = result.target.error.toString(); // JSON.stringify(result);

            externalFailFunc(result);

            function getFileError() {
                console.error(JSON.stringify(result));
                var msgText = "Unknown error.";
                switch (result.code) {
                    case FileError.NOT_FOUND_ERR:
                        msgText = "File not found error.";
                        break;
                    case FileError.SECURITY_ERR:
                        msgText = "Security error.";
                        break;
                    case FileError.ABORT_ERR:
                        msgText = "Abort error.";
                        break;
                    case FileError.NOT_READABLE_ERR:
                        msgText = "Not readable error.";
                        break;
                    case FileError.ENCODING_ERR:
                        msgText = "Encoding error.";
                        break;
                    case FileError.NO_MODIFICATION_ALLOWED_ERR:
                        msgText = "No modification allowed.";
                        break;
                    case FileError.INVALID_STATE_ERR:
                        msgText = "Invalid state.";
                        break;
                    case FileError.SYNTAX_ERR:
                        msgText = "Syntax error.";
                        break;
                    case FileError.INVALID_MODIFICATION_ERR:
                        msgText = "Invalid modification.";
                        break;
                    case FileError.QUOTA_EXCEEDED_ERR:
                        msgText = "Quota exceeded.";
                        break;
                    case FileError.TYPE_MISMATCH_ERR:
                        msgText = "Type mismatch.";
                        break;
                    case FileError.PATH_EXISTS_ERR:
                        msgText = "Path exists error.";
                        break;
                }
                // Now tell the user what happened console.log( msgText); navigator.notification.alert( msgText, null, alertTitle, alertBtn); }
                return msgText;
            }
        }

        return {
            ReadSettingsfile: readSettingsFile,
            ReadFile: readFile,
            SaveSettingsFile: saveSettingsFile,
            SaveFile: saveFile
        };
    });
})();