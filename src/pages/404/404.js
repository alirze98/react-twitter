import { red } from '@material-ui/core/colors';
import React from 'react';
import { useTranslation } from 'react-i18next';


const Page404 = () => {
    const {t} = useTranslation();
    return (
        <div>
            <h1 style={{color:'red'}}>error 404</h1>
            <h5>{t("404_desc")}</h5>
        </div>
    );
};

export default Page404;