yargs.command({
    command: 'add',
    describe: 'Agrega una nota'
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Cuerpo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Eliminar Nota,
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Leer una nota',
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()}