import React from 'react'
import { useTable } from 'react-table'
import { v4 as uuid } from 'uuid'
import { observer } from 'mobx-react'

import { Table, PopularityImage } from './styledComponents'

interface SpotifyNewReleaseTableProps {
   tableData: {
      trackNumber: string
      songName: string
      duration: string
      popularity: string
   }[]
   newreleaseTableTabId: string
   changeSongStatus: (
      previewUrl: string,
      songName: string,
      artist: string,
      playerUrl: string,
      id: string
   ) => void
}

const SpotifyNewReleaseTable = observer(
   (props: SpotifyNewReleaseTableProps) => {
      const { tableData, changeSongStatus, newreleaseTableTabId } = props

      const data = React.useMemo(() => [...tableData], [])

      const columns = React.useMemo(
         () => [
            {
               Header: '#',
               accessor: 'trackNumber'
            },
            {
               Header: 'Track',
               accessor: 'songName'
            },
            {
               Header: 'Time',
               accessor: 'duration',
               Cell: cellprops => {
                  const { row } = cellprops
                  const { original } = row
                  const { duration } = original
                  const convertToSeconds = parseInt(duration) / 1000
                  const convertToMinutes = convertToSeconds / 60
                  const slicedTime = convertToMinutes.toString().slice(0, 4)
                  return slicedTime
               }
            },
            {
               Header: 'Popularity',
               accessor: 'popularity',
               Cell: function tableCell(cellprops) {
                  const { row } = cellprops
                  const { original } = row
                  const { popularity } = original
                  const popularityImageUrl =
                     popularity !== undefined && popularity > 50
                        ? 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921036/Group_188_ln78zc.png'
                        : 'https://res.cloudinary.com/image-link-getter/image/upload/v1653921028/Group_183_xwydvw.png'

                  return (
                     <PopularityImage
                        src={popularityImageUrl}
                        alt='popularity'
                     />
                  )
               }
            }
         ],
         []
      )

      const {
         getTableProps,
         getTableBodyProps,
         headerGroups,
         rows,
         prepareRow
      } = useTable({ columns, data })

      return (
         <Table
            {...getTableProps()}
            style={{
               width: '1300px'
            }}
         >
            <thead>
               {headerGroups.map(headerGroup => (
                  <tr
                     {...headerGroup.getHeaderGroupProps()}
                     style={{
                        borderBottom: '1px solid #475569'
                     }}
                     key={headerGroup.headers[0].id}
                  >
                     {headerGroup.headers.map(column => (
                        <th
                           {...column.getHeaderProps()}
                           style={{
                              color: 'white',
                              paddingBottom: '16px'
                           }}
                           key={column.id}
                        >
                           {column.render('Header')}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map(row => {
                  prepareRow(row)
                  return (
                     <tr
                        {...row.getRowProps()}
                        style={{
                           cursor: 'pointer',
                           background:
                              row.original.id === newreleaseTableTabId
                                 ? '#303030'
                                 : null,
                           margin: '40px'
                        }}
                        key={row.id}
                        onClick={() => {
                           const { original } = row
                           const {
                              thumbnailUrl = '',
                              songName,
                              artists,
                              songUrl1,
                              id
                           } = original
                           changeSongStatus(
                              thumbnailUrl,
                              songName,
                              artists,
                              songUrl1,
                              id
                           )
                        }}
                     >
                        {row.cells.map(cell => (
                           <td
                              {...cell.getCellProps()}
                              style={{
                                 color: 'white',
                                 paddingBottom: '16px',
                                 paddingTop: '16px',
                                 fontFamily: 'Assistant',
                                 fontWeight: '600',
                                 fontSize: '16px',
                                 paddingLeft: '32px'
                              }}
                              key={uuid()}
                           >
                              {cell.render('Cell')}
                           </td>
                        ))}
                     </tr>
                  )
               })}
            </tbody>
         </Table>
      )
   }
)

export default SpotifyNewReleaseTable
