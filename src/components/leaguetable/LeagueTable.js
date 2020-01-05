import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useGetRequest } from '../../helpers/GetRequest';
import { Loader } from '../../misc/Loader';

//Import Column Data to set up table

const columns = [
    { id: 'leaguePosition', label: 'League Position', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'played', label: 'P', minWidth: 50 },
    { id: 'won', label: 'W', minWidth: 50, align: 'right'},
    { id: 'lost', label: 'L', minWidth: 50, align: 'right'},
    { id: 'totalPrizeMoney', label: 'Total Prize Money £', minWidth: 100, align: 'right' },
    { id: 'daysLeft', label: 'Days Left', minWidth: 50, align: 'right' },
];

function createData(leaguePosition, name, played, won, lost, totalPrizeMoney, challengable, daysLeft) {
    return { leaguePosition, name, played, won, lost, totalPrizeMoney, challengable, daysLeft };
}


const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '1rem',
    },
    container: {
        maxHeight: 440,
    },
    
});


export const LeagueTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(50);

    const players = useGetRequest('players')

    if (!players) {
        return <Loader />
    }

    const rows = []

    players.data.map(player => {
        if (player.results.length > 0) {
            const hi = new Date(Date.parse(player.results.slice(-1)[0].date)).toString();
            const lol = Date.parse(hi)
            const newDate = Date.now();

            const daysLeft = newDate - lol
            const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
            const days = Math.round(sum)
            return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.totalPrizeMoney, player.challengable, days))
          
        }
        const hi = new Date(Date.parse(player.createdAt.slice(-1)[0].date)).toString();
        const lol = Date.parse(hi)
        const newDate = Date.now();

        const daysLeft = newDate - lol
        const sum = 30 - (daysLeft / (60 * 60 * 24 * 1000))
        const days = Math.round(sum)
        return rows.push(createData(player.leaguePosition, player.name, player.played, player.won, player.lost, player.totalPrizeMoney, player.challengable, days))
        
    })

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.leaguePosition} style={row.challengable ? { backgroundColor: 'lightgreen' } : { backgroundColor: 'orange' }}>
                                    {columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}