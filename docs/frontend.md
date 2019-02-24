---
id: frontend
title: Contributing to Frontend
sidebar_label: Frontend
---

We are using [VueJs](https://vuejs.org/) for the frontend part of the application.

- Complete the steps that are provided in the [installation section](installation#running-locally) first.

- Make sure that you can succesfully see the website at [http://localhost](http://localhost).

Now run the following commands

```bash
# Navigate to "laradock" directory
cd laradock

# Enter the Workspace container, to execute commands like (npm install, npm run watch, …)
docker-compose exec workspace bash

# Now watch the changes in vue files
npm run watch

```

For contributing to the frontend, the only files that needs to be touched are in `resources/js/` and `resources/sass/`