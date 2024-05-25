import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box,Typography } from '@mui/material';
import categoryApi from "../../../../api/categoryApi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
  },

  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      // marginTop: theme.spacing(1),
      transition: 'all .25s',

      '&:hover': {
        color: 'blue',
        cursor: 'pointer',
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        // setCategoryList(
        //   list.map((x) => ({
        //     id: x.id,
        //     name: x.name,
        //   }))
        // );
        setCategoryList(list);
      } catch (error) {
        console.log('Failed to fetch category list', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.name);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" fontWeight={800}>DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;