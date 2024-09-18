'use client'
import React from 'react'

//next
import dynamic from 'next/dynamic'

//icon
import { IconChevronDown } from '@shared/assets/svgs/ui/common/IconChevronDown'

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options: any = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%'
          }
        }
      }
    }
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last'
    }
  },
  dataLabels: {
    enabled: false
  },

  xaxis: {
    categories: ['Mon', 'Thu', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun']
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px'
  },
  fill: {
    opacity: 1
  }
}

interface ChartTwoState {
  series: {
    name: string
    data: number[]
  }[]
}

const ChartTwo: React.FC = () => {
  const series = [
    {
      name: 'Sales',
      data: [44, 55, 41, 67, 22, 43, 65]
    },
    {
      name: 'Revenue',
      data: [13, 23, 20, 8, 13, 27, 15]
    }
  ]

  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4'>
      <div className='mb-4 justify-between gap-4 sm:flex'>
        <div>
          <h4 className='text-xl font-semibold text-black dark:text-white'>
            Profit this week
          </h4>
        </div>
        <div>
          <div className='relative z-20 inline-block'>
            <select
              name='#'
              id='#'
              className='relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none'
            >
              <option value='' className='dark:bg-boxdark'>
                This Week
              </option>
              <option value='' className='dark:bg-boxdark'>
                Last Week
              </option>
            </select>
            <span className='absolute right-3 top-1/2 z-10 -translate-y-1/2'>
              <IconChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div>
        <div id='chartTwo' className='-mb-9 -ml-5'>
          <ReactApexChart
            options={options}
            series={series}
            type='bar'
            height={350}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  )
}

export default ChartTwo
