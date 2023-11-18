import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, push, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey            : "AIzaSyBLkB46gUITYAU8MkO7bhFxw7ctTjKPPqU",
  authDomain        : "secret-santa-db63e.firebaseapp.com",
  projectId         : "secret-santa-db63e",
  storageBucket     : "secret-santa-db63e.appspot.com",
  messagingSenderId : "556509656076",
  appId             : "1:556509656076:web:a778bcc506aed5e5486a29"
};

// Initialize Firebase
initializeApp( firebaseConfig );

const db = getDatabase();

export const write = async ( user, cb, errCb ) => {

	get( child( ref( db ), 'usersAvailable' ) )
		.then( ( snapshot ) => {

			if ( snapshot.exists() ) {

				const data = snapshot.val();

				console.log( data );

				let foundUser = null;
				let userIndex = null;

				const getRandomUser = () => {

					// pick a random user
					const randomIndex = Math.floor( Math.random() * data.length );

					const randomUser = data[randomIndex];

					console.log( user, randomUser, randomIndex, data );

					if ( randomUser.toLowerCase() === user.toLowerCase() ) {
						return getRandomUser();
					}

					foundUser = randomUser;
					userIndex = randomIndex;

				};

				getRandomUser();

				// get all of the relations we already have
				get( child( ref( db ), 'relations', ) )
					.then( ( relationSnapshot ) => {

						if ( relationSnapshot.exists() ) {

							const relationData = relationSnapshot.val();

							let formattedRelations = relationData;

							if ( !relationData ) {
								formattedRelations = [];
							}

							const keys = Object.keys( formattedRelations );

							const alreadyHaveRelation = keys.reduce( ( result, key ) => {

								console.log( formattedRelations, key );

								if ( formattedRelations[key].receiving.toLowerCase() === user.toLowerCase() ) {
									console.log( formattedRelations[key] );
									return formattedRelations[key];
								}

								return false;

							}, false );

							if ( alreadyHaveRelation ) {
								errCb( `Already have a person to gift, your designated person is: ${alreadyHaveRelation.to}` );
								return;
							}

							console.log( 'existing relation', relationData );

							const relationRef = ref( 'relations' );

							relationRef.push( {
								receiving : user,
								to        : foundUser,
							} )
								.then( () => {

									console.log( data );

									// take off the users from the list of users still available
									data.splice( userIndex, 1 );

									console.log( data );

									// update the list in firebase.database()
									set( ref( db, 'usersAvailable', data ) );
								} );

							cb( foundUser );

						}

						else {

							console.log( "No relations available" );

							push( ref( db, 'relations' ), {
								secretSanta : user,
								to          : foundUser,
							} )
								.then( () => {

									console.log( data );

									// take off the users from the list of users still available
									data.splice( userIndex, 1 );

									console.log( data );

									const formattedData = data.reduce( ( dataObj, dataName, index ) => {

										dataObj[index] = dataName;

										return dataObj;

									}, {} );

									console.log( 'usersAvailable', formattedData );

									// update the list in firebase.database()
									set( ref( db, 'usersAvailable' ), formattedData );

								} );

						}

					} )
					.then( () => {
						cb( foundUser )
					} );

			}

			else {
				console.log("No data available");
			}

		} );

};

export default {
	write,
};
