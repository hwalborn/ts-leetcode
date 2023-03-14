if [ $# -eq 1 ]
    then echo "NO ARGUMENTS BABY"
    exit 1
fi

cp ./template.txt ./src/problems/$1/$2.ts