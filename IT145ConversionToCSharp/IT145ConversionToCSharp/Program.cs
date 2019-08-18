using System;
using System.IO;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace IT145ConversionToCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            bool logoff = false;
            string userLog;
            int failedAttempts = 0;

            
            do
            {
                Console.WriteLine("Type \"Login\" or \"Logoff\" to continue: ");
                userLog = Console.ReadLine();

                if (userLog.ToLower().Equals("login"))
                {
                    // Get username
                    Console.Write("Enter username: ");
                    string username = Console.ReadLine();

                    // Get password
                    Console.Write("Enter password: ");
                    string password = Console.ReadLine();

                    // Get role
                    VerifyUser user = new VerifyUser();
                    string role = user.verifyUserAccess(username, password);

                    // Determine if role is valid or not
                    if (role.Equals(""))
                    {
                        Console.WriteLine("Username and password returned no user permissions.");
                    }
                    else
                    {
                        Console.WriteLine("\n" + user.getUserRoleFile(role) + "\n");
                        continue;
                    }
                }

                // User logs off directly
                if (userLog.ToLower().Equals("logoff"))
                {
                    logoff = true;
                    break;
                }
                else
                {
                    // User failed a login attempt
                    Console.WriteLine("Invalid input, please try again.");
                    failedAttempts++;
                }

                // Close program if user fails three times
                if (failedAttempts >= 3)
                {
                    Console.WriteLine("Maximum number of failed login attempts reached. Program closing.");
                    logoff = true;
                    continue;
                }


            } while (!logoff);



        }
    }
}
