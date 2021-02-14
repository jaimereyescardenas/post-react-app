import React from "react";
import Paragraph from './Paragraph';
import SearchBar from './SearchBar';
import ResultsTable from './ResultsTable';
import CreateBar from './CreateBar';

export default function MainApp() {
    return (
        <main className="container App-main">
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, delectus non! Error et, praesentium aut laboriosam distinctio quaerat quos! Sunt, cupiditate tenetur enim dignissimos quisquam corporis harum placeat animi est.'}
                />
            </div>
            <SearchBar></SearchBar>
            <ResultsTable></ResultsTable>
            <div className="text-center mx-auto my-4">
                <Paragraph 
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, delectus non! Error et, praesentium aut laboriosam distinctio quaerat quos!'}
                />
            </div>
            <CreateBar/>
        </main>
    );
}