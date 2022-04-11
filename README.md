# unblock-all
A javascript script that unblocks all of a Twitter user's blocked Twitter accounts

# Overview
Unblocking everyone blocked on Twitter involves navigating to the blocked accounts (https://twitter.com/settings/blocked) page, scrolling down to the bottom until webpage loads the next few accounts, and then clicking the Ublock button one by one.
This script attempts to automate the process of scrolling until everyone is loaded, finding the block buttons, and automatically clicking them.
The `unblock.js` script performs each of those tasks by scrolling to the bottom of the page, waiting for it to load via a set timeout, and then continuing to scroll until it observes no difference in scroll height.
Once the script can no longer scroll, it finds all of the unblock buttons, by searching for the `'blocked-text'` class elements (à la https://gist.github.com/themorgantown/3e3e6a42e17ebcbc766c) and clicking on each of them individually.

# New Features
Now script can parse more than 50 users. Twitter cant load more than ~50 users, and with older script version you cant remove more than 50-100 users from black list. Now it get users and remove it from black list immediately, and than start again.

# What if it doesnt work?
1. First of all you need check which text contain remove from black list button. 
![2022-04-11_19-09-52](https://user-images.githubusercontent.com/57581726/162757946-979a647a-0634-4006-9df7-71ce119fa743.png)

On this screenshot we can see "Blocked" text on button. If you have a different text, you should have changed it in the script.
![2022-04-11_19-12-28](https://user-images.githubusercontent.com/57581726/162758560-9f84a474-fbb3-4c01-8718-9141b7c8ad97.png)

You need change it

# Usage
1. Open Google Chrome
1. Navigate to https://twitter.com/settings/blocked
 * Sign in, if necessary
1. Disable or whitelist any adblock or similar blocking extensions (just in case --- I have no idea if this is a problem)
1. Open the Javascript Console:
 * Windows/Linux: ``Ctrl + Shift + J``
 * OS X: ``Cmd + Option +J``
1. Paste the contents of ``unblock.js`` into the Console window. Press `Enter`.
1. Type `main()`. Press `Enter`. 
 * Alternatively, type `unblock(timeoutInMilliseconds, maximumNumberOfScrolls)` for a custom timeout in milliseconds and max number of scrolls.
1. Let it chooch
1. When the dialog pops up, verify that the number of blocked accounts obtained makes sense
 * Click Ok/Yes to unblock every account
 * Click Cancel/No to do nothing
1. Refresh the page to verify that accounts have been unblocked

# Issues
* If you **accidentally run the unblock script twice** (via either `main()` or `unblock(...)`) **without reloading**, you will follow everyone you just unblocked. 

 *If this occurs*:
  * **DO NOT RELOAD THE PAGE**
  * Run the script again
  * Press Ok/Yes to "unblock" every account. The button clicked by the script remains the same, but will instead unfollow the accounts.
