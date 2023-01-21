import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';

export default function MyPieChart() {
      return (
        <PieChart className='col-md-3'
        data={[
            { title: 'CodeForces', value: 391, color: 'green' },
            { title: 'LeetCode', value: 81, color: 'orange' },
            { title: 'CodeChef', value: 226, color: 'yellow' },
            { title: 'LightOj', value: 70, color: 'cyan' },
            { title: 'Atcoder', value: 106, color: 'blue' },
          ]}/>
      );
}
