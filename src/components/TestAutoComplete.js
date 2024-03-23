import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const top100Films = [
    {title: 'title1'},
    {title: 'title2'},
    {title: 'title3'}
];

const TestAutoComplete = () => {
    return ( 
        <Stack spacing={3} sx={{ width: 500, borderRadius: '25px' }}>
            <Autocomplete
                multiple
                id="tags-outlined"
                limitTags={3}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[0]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="filterSelectedOptions"
                    />
                )}
            />
        </Stack>
     );
}
 
export default TestAutoComplete;