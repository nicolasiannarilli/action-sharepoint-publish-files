# action-sharepoint-publish

A simple Github Action that uploads files to a Sharepoint library based on a glob match for filenames

Based on the action [obrassard/action-sharepoint-publish](https://github.com/obrassard/action-sharepoint-publish) which would only create a zip of an entire repo to upload.

Similar to another fork [harsohailB/react-app-sp-deployment](https://github.com/harsohailB/react-app-sp-deployment) which uploaded files, but still based on a hard-coded pattern.

## Inputs

### `site_url`

**Required** The complete URL of your SharePoint site. Example: `https://you.sharepoint.com/sites/mySite`

### `library_folder`

**Required** The path relative to the library where to upload a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

### `sharepoint_user`

**Required** The username to use for authentication. Example `roger.tester@mydomain.com`.

### `sharepoint_password`

**Required** The user's password. Example `MyPassword123!`.

> :bulb: Tip: It is recommended to use GitHub Actions Secrets to store sensitive information like passwords

### `file_base`

The base name to strip from the file glob patterns matched when naming in SharePoint

### `file_glob`

The glob pattern to apply to match files to transfer

## Example usage

This action is particularly useful when triggered by new releases :

```yml
name: 'Sharepoint release'

on:
  release:
    types: created

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    
    - name: Cloning repo # This step is required
      uses: actions/checkout@v2

    - name: Publish to Sharepoint
      uses: stage3talent/action-sharepoint-publish-files@v2.0.0
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_user: ${{ secrets.USER }}
       sharepoint_password: ${{ secrets.PASSWORD }}
       file_base: 'build'
       file_glob: '**/*'
```
