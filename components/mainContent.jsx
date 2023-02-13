import React from "react";
import Image from "next/image";

export default function MainContent() {
  return (
    <div class='p-4 ml-[256px]'>
      <div class='p-4 mt-14'>
        <div className='flex flex-col'>
          <h1 className='text-lg font-semibold text-indigo-500'>Suggested</h1>
          <div className='flex gap-5 mt-5'>
            <div className='flex flex-col border border-gray-200 rounded-lg px-3 py-5'>
              <Image
                src='/mobil.jpg'
                width={256}
                height={256}
                alt='Cover Image'
                className='w-full rounded-lg'
              />
              <p className='text-base font-semibold mt-5 text-indigo-500'>
                Mobil Antik Nan Cantik
              </p>
              <p className='text-sm font-thin text-gray-500'>
                19 Desember 2022
              </p>
            </div>
            <div className='flex flex-col border border-gray-200 rounded-lg px-3 py-5'>
              <Image
                src='/mobil.jpg'
                width={256}
                height={256}
                alt='Cover Image'
                className='w-full rounded-lg'
              />
              <p className='text-base font-semibold mt-5 text-indigo-500'>
                Mobil Antik Nan Cantik
              </p>
              <p className='text-sm font-thin text-gray-500'>
                19 Desember 2022
              </p>
            </div>
            <div className='flex flex-col border border-gray-200 rounded-lg px-3 py-5'>
              <Image
                src='/mobil.jpg'
                width={256}
                height={256}
                alt='Cover Image'
                className='w-full rounded-lg'
              />
              <p className='text-base font-semibold mt-5 text-indigo-500'>
                Mobil Antik Nan Cantik
              </p>
              <p className='text-sm font-thin text-gray-500'>
                19 Desember 2022
              </p>
            </div>
            <div className='flex flex-col border border-gray-200 rounded-lg px-3 py-5'>
              <Image
                src='/mobil.jpg'
                width={256}
                height={256}
                alt='Cover Image'
                className='w-full rounded-lg'
              />
              <p className='text-base font-semibold mt-5 text-indigo-500'>
                Mobil Antik Nan Cantik
              </p>
              <p className='text-sm font-thin text-gray-500'>
                19 Desember 2022
              </p>
            </div>
            <div className='flex flex-col border border-gray-200 rounded-lg px-3 py-5'>
              <Image
                src='/mobil.jpg'
                width={256}
                height={256}
                alt='Cover Image'
                className='w-full rounded-lg'
              />
              <p className='text-base font-semibold mt-5 text-indigo-500'>
                Mobil Antik Nan Cantik
              </p>
              <p className='text-sm font-thin text-gray-500'>
                19 Desember 2022
              </p>
            </div>
          </div>
          {/* table */}
          <div class='relative overflow-x-auto shadow-md mt-16'>
            <table class='w-full text-sm text-left text-gray-500'>
              <thead class='text-xs text-indigo-700 uppercase bg-gray-50 '>
                <tr>
                  <th class='px-6 py-3'>Product name</th>
                  <th class='px-6 py-3'>Color</th>
                  <th class='px-6 py-3'>Category</th>
                  <th class='px-6 py-3'>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
                <tr class='bg-white border-b hover:bg-gray-50'>
                  <td class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    Apple MacBook Pro 17"
                  </td>
                  <td class='px-6 py-4'>Sliver</td>
                  <td class='px-6 py-4'>Laptop</td>
                  <td class='px-6 py-4'>$2999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
