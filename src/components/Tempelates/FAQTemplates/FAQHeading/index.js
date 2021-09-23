// import * as React from 'react';
// import PropTypes from 'prop-types';

// import {
//     Box,
//     makeStyles,
//     Accordion,
//     AccordionDetails,
//     AccordionSummary,
//     Tab,
//     Tabs,
//     Typography

// } from '@material-ui/core'
// // import AddIcon from '@mui/icons-material/Add';
// // import RemoveIcon from '@mui/icons-material/Remove';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMoreIcon';




// const useStyles = makeStyles((theme) => ({
//     tabs: {
//         background: 'blue',
//         border: '1px solid res',
//         color: 'red'
//     }

// }))

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}>
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

// export function FAQHeading() {
    
//     const [value, setValue] = React.useState(0);

//     const [expanded, setExpanded] = React.useState(false);


//     const classes = useStyles()

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500, padding: '5% 10%' }}>
//             <Tabs
//                 orientation="vertical"
//                 variant="fullWidth"
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="Vertical tabs example"
//                 sx={{}}
//             >
//                 <Tab className={classes.tabs} label="Item One" {...a11yProps(0)} />
//                 <Tab label="Item Two" {...a11yProps(1)} />
//                 <Tab label="Item Three" {...a11yProps(2)} />
//                 <Tab label="Item Four" {...a11yProps(3)} />
//                 <Tab label="Item Five" {...a11yProps(4)} />
//                 <Tab label="Item Six" {...a11yProps(5)} />
//                 <Tab label="Item Seven" {...a11yProps(6)} />
//             </Tabs>



//             <TabPanel value={value} index={0}>
//                 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//                     <AccordionSummary sx={{ width: '50%', flexShrink: 1 }}
//                         expandIcon={<h1>5</h1>}
//                         aria-controls="panel1bh-content"
//                         id="panel1bh-header">
//                         <Typography sx={{ width: '50%', flexShrink: 1 }}>
//                             General settings
//                         </Typography>
//                     </AccordionSummary>

//                     <AccordionDetails>
//                         <Typography>
//                             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//                             Aliquam eget maximus est.
//                         </Typography>
//                     </AccordionDetails>
//                 </Accordion>
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//                 Item Four
//             </TabPanel>
//             <TabPanel value={value} index={4}>
//                 Item Five
//             </TabPanel>
//             <TabPanel value={value} index={5}>
//                 Item Six
//             </TabPanel>
//             <TabPanel value={value} index={6}>
//                 Item Seven
//             </TabPanel>
//         </Box>
//     );
// }