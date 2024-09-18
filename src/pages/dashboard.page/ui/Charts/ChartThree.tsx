'use client'

import React from 'react'

//next
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface ChartThreeState {
  series: number[]
}

const options: any = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut'
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF'],
  labels: ['Admin', 'Organizer', 'Customer'],
  legend: {
    show: false,
    position: 'bottom'
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380
        }
      }
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200
        }
      }
    }
  ]
}

const ChartThree: React.FC = () => {
  const series = [10, 50, 150]

  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5'>
      <div className='mb-3 justify-between gap-4 sm:flex'>
        <div>
          <h5 className='text-xl font-semibold text-black dark:text-white'>
            Role User
          </h5>
        </div>
      </div>

      <div className='mb-2'>
        <div id='chartThree' className='mx-auto flex justify-center'>
          <ReactApexChart options={options} series={series} type='donut' />
        </div>
      </div>

      <div className='-mx-8 flex items-center justify-center gap-y-3'>
        <div className='w-full px-8 sm:w-1/2'>
          <div className='flex w-full items-center'>
            <span className='mr-2 block h-3 w-full max-w-3 rounded-full bg-primary'></span>
            <p className='flex w-full gap-2 text-sm font-medium text-black dark:text-white'>
              <span> Admin </span>
              <span> 65% </span>
            </p>
          </div>
        </div>
        <div className='w-full px-8 sm:w-1/2'>
          <div className='flex w-full items-center'>
            <span className='mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]'></span>
            <p className='flex w-full gap-2 text-sm font-medium text-black dark:text-white'>
              <span> Organizer </span>
              <span> 34% </span>
            </p>
          </div>
        </div>
        <div className='w-full px-8 sm:w-1/2'>
          <div className='flex w-full items-center'>
            <span className='mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]'></span>
            <p className='flex w-full gap-2 text-sm font-medium text-black dark:text-white'>
              <span> Customer </span>
              <span> 45% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChartThree
