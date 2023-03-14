import fs from 'fs';
import path from 'path';


(async () => {
    const { PROBLEM_LEVEL } = process.env;
    if (!PROBLEM_LEVEL) {
        console.error('MUST PROVIDE PROBLEM LEVEL');
        return;
    }
    const currentPath = path.join(__dirname, `problems/${PROBLEM_LEVEL}/`);
    const files = fs.readdirSync(currentPath);
    if (!files.length) {
        console.error(`NO FILES FOR PROBLEM LEVEL: ${PROBLEM_LEVEL}`);
        return;
    }
    const latestFile = files.sort((fileA: string, fileB: string) => {
        const fileATime = fs.statSync(path.join(currentPath, fileA))?.ctime?.getTime();
        const fileBTime = fs.statSync(path.join(currentPath, fileB))?.ctime?.getTime();
        return  fileBTime - fileATime;
    })?.shift();

    const {default: ImportedClass } = await import(`./problems/easy/${latestFile}`);
    const solution = new ImportedClass();
    if ('solve' in solution) {
        new ImportedClass()?.solve();
    }
})()