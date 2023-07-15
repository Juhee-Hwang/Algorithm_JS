-- 코드를 입력하세요
/*
SELECT *, 
    SUBSTRING(SALES_DATE,1,4) AS SALES_YEAR,
    SUBSTRING(SALES_DATE,6,2) AS SALES_MONTH 
FROM ONLINE_SALE
GROUP BY SALES_YEAR, SALES_MONTH;

SELECT COUNT(*) FROM USER_INFO
WHERE DATE_FORMAT(JOINED, '%Y-%m-%d') LIKE '2021%';

SELECT USER_ID FROM USER_INFO
WHERE DATE_FORMAT(JOINED, '%Y-%m-%d') LIKE '2021%'
*/


SELECT SUBSTRING(SALES_DATE,1,4) AS YEAR,
        CAST(SUBSTRING(SALES_DATE,6,2) AS SIGNED) AS MONTH,
        COUNT(DISTINCT USER_ID) AS PUCHASED_USERS,
        ROUND(COUNT(DISTINCT USER_ID)/(SELECT COUNT(*) FROM USER_INFO
WHERE DATE_FORMAT(JOINED, '%Y-%m-%d') LIKE '2021%') , 1) AS PUCHASED_RATIO
FROM ONLINE_SALE
WHERE USER_ID IN
(SELECT USER_ID FROM USER_INFO
WHERE DATE_FORMAT(JOINED, '%Y-%m-%d') LIKE '2021%')
GROUP BY YEAR, MONTH
ORDER BY YEAR, MONTH;


