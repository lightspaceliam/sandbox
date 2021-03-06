import {
    makeStyles,
    createStyles,
} from '@material-ui/core/styles';
import {
    h1,
    h2,
    errorMessage,
} from '../../../_common/styles';

const useStyles = makeStyles(() =>
    createStyles({
        formGroup: {
            padding: '20px 10px',
        },
        h1: {
            ...h1,
        },
        h2: {
            ...h2,
        },
        errorMessage: {
            ...errorMessage,
        },
    }),
);

export default useStyles;