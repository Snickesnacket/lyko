import React from 'react'

interface IPaginationProps {
	page: number
	totalPages: number
	hasPreviousPage: boolean
	hasNextPage: boolean
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IPaginationProps> = ({
	page,
	hasPreviousPage,
	hasNextPage,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className="flex flex-row justify-between my-20 align-items-center">
			{ hasPreviousPage ? (
			<div className="prev w-32">
				<button
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
				>Previous Page</button>
			</div>) : (<div className="w-32"></div>)
			}
			<h3>{page}</h3>
			{hasNextPage ? (  <div className="next w-32">
				<button
					disabled={!hasNextPage}
					onClick={onNextPage}
				>Next Page</button>
			</div>) : (<div className="w-32"></div>)
			}
		</div>
	)
}

export default Pagination
