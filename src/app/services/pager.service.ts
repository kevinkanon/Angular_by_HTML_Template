import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class PagerService {

    constructor() { }

    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10)
    {
        let totalPage = Math.ceil(totalItems / pageSize);

        // Ensure that this do not fail out of bounds
        if (currentPage < 1)
        {
            currentPage = 1
        }
        else if (currentPage > totalPage)
        {
            currentPage = totalPage;
        }
        ////////////////////////////////////

        let startPage: number;
        let endPage: number;

        if (totalPage <= 10)
        {
            startPage = 1;
            endPage = totalPage;
        }
        else
        {
            // if more than 10 pages
            if(currentPage <= 6) 
            {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPage)
            {
                startPage = totalPage - 9;
                endPage = totalPage;
            }
            else
            {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }


        // calculate start and end indexitems
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min((startIndex + pageSize-1), (totalItems -1));

        // Create and array of pages
        let pages =  Array.from(Array((endPage - 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPage: totalPage,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }


}
