using System.IO;
using System.Security.Cryptography;

namespace IT145ConversionToCSharp
{
    public class VerifyUser
    {
        private string hashedPassword;

        public string verifyUserAccess(string username, string password)
        {
            StreamReader sr = new StreamReader(@"Files/credentials.txt");

            // Create MD5 hash for password
            MD5 md5hash = MD5.Create();
            MD5Hash hash = new MD5Hash();
            hashedPassword = hash.GetMd5Hash(md5hash, password);

            // Continue until end of credential file
            while (!sr.EndOfStream)
            {
                var nextLine = sr.ReadLine();

                // Split Streamreader line by tabs
                string[] userInfo = nextLine.Split("\t");

                // Remove quotation marks from password string
                userInfo[2] = userInfo[2].Trim('"');

                // Hard coded array positons for added security, credential file must be updated to exact
                // for credentials to be valid
                if (username == userInfo[0] && hashedPassword == userInfo[1] && password == userInfo[2])
                {
                    return userInfo[3];
                }
                else
                {
                    continue;
                }
            }
            return "";
        }

        public string getUserRoleFile(string role)
        {
            // Return blank string if role is not valid
            if (role == "")
            {
                return "";
            }

            return System.IO.File.ReadAllText(@"Files/" + role + ".txt");
            
        }

    }
}
