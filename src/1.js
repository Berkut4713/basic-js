
function createDreamTeam(members) {
    let Arr =[];
    if (members) {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === "string") {
                Arr.push(members[i].trimStart()[0].toUpperCase());
            }
        }
        if (Arr.length !== 0) {
            Arr = Arr.sort();
        } else return false;
        debugger;
    } else return false;
  }
  createDreamTeam(false);
