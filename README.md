# program-registration

This project is intended to help register for Volleyball programs at Collingwood Neighbourhood House.

The project currently registers for the Monday/Wednesday 8:30PM timeslot automatically through a GitHub Actions workflow triggered on a cron schedule. See the `Copying this project` section below if you want to set this up for yourself.

The registration script can also be run locally to register, provided you start the script at most 12 hours before registration opens. See the `Steps to run` section below for how to do this.

# Requirements
just gotta log in
- npm
- NodeJS: v18.18.2

# Copying this project

1. Follow the instructions here: https://stackoverflow.com/questions/18200248/cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github
   - Note: Your repo must be public to get free GitHub Actions runs
2. Set up the project secrets
   - Go to your repo on github.com
   - Click on `Settings`
   - Click on `Security -> Secrets and variables -> Actions`
   - Click on `New repository secret`
   - Name the secret `CYPRESS_ENV`
   - Put the completed contents (JSON format) of `example.env.json` as the Secret
     ![Alt text](/addSecretExample.png?raw=true)
     example.env.json
     ```json
     {
       "username": "TBD",
       "password": "TBD",
       "registrationUrl": "TBD"
     }
     ```
   - Click `Add secret`
3. You should now be set up to register automatically for Volleyball on Mondays and Wednesdays.
   - You may optionally disable the automatic registration workflow for either or both of the days by following the steps here: https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow

# Steps to run

1. Run `npm install`
2. Create and fill in `cypress.env.json`.
   - Required parameters are in `example.env.json`
3. Run `npm run cypress:run`
   - This can be run up to 12 hours in advance of the registration time.
   - WARNING: If your computer goes to sleep or shuts off before the registration time the script will stop running and you will be unable to register
4. Wait for the script to finish
