"# GUI-DB-FRONT" 


Werk flow

1) ALWAYS '''git pull''' and '''npm install''' before starting your work/branching

2) Before working on your feature/view --> '''git checkout -b yourinitials-viewdescription'''

3) Add and commit your changes as you work 

4) '''git push origin''' (may have to set upstream) before stopping your work for the day

5) Once your feature/view is complete, go to github.com and click create pull request or compare and pull requet for your branch into dev (base should be dev and the other branch should be yours). Add comments on what functionality you added. Create pull request. 

 ----We will review and pull in code during each lab.---

6) THEN '''git checkout dev''' to go back to dev

7) '''git pull''' to pull down everyone's changes

8) '''git checkout -b branch-name''' to start working on your code again (see steps above)

Fun note for the Andrew part of this project: If, at any point, you need to access the calendar page, make sure to run "npm install --save-dev @types/jquery, or else it won't work. If you don't need to access the calendar, it will spam your terminal with a bunch of errors if you don't run the command, but any other page you access should still work. For more information on this topic, read at https://fullcalendar.io/docs/typescript
