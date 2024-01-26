import Chip from '@mui/material/Chip';
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
            {/* <Autocomplete
                multiple
                id="tags-standard"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Favorites"
                    />
                )}
            /> */}
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
                    // placeholder="Favorites"
                    />
                )}
            />
            {/* <Autocomplete
                multiple
                id="tags-filled"
                options={top100Films.map((option) => option.title)}
                defaultValue={[top100Films[13].title]}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                }
                renderInput={(params) => (
                    <TextField
                    {...params}
                    variant="filled"
                    label="freeSolo"
                    placeholder="Favorites"
                    />
                )}
            /> */}
            {/* <Autocomplete
                multiple
                id="tags-readOnly"
                options={top100Films.map((option) => option.title)}
                defaultValue={[top100Films[12].title, top100Films[13].title]}
                readOnly
                renderInput={(params) => (
                    <TextField {...params} label="readOnly" placeholder="Favorites" />
                )}
            /> */}
        </Stack>
     );
}
 
export default TestAutoComplete;