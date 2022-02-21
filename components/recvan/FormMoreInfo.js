import React from 'react'
const FormControl = ({ label, required, inputProps = {}, children }) => {
  return (
    <div className="form-control">
      <label htmlFor="FirstName" className="flex justify-start gap-2 label">
        {required && <span className="text-error">* </span>}
        <span>{label}</span>
      </label>
      <div className="input-group">
        {children || (
          <input
            className="w-full bg-white input-bordered input "
            {...inputProps}
          />
        )}
      </div>
    </div>
  )
}
export default function FormMoreInfo() {
  return (
    <div className="container py-6">
      <div className="mx-auto max-w-screen-lg leading-snug text-black text-opacity-[0.54] prose-h2:mb-2 prose-h2:text-3xl prose-h2:leading-normal prose-h2:tracking-[0.05em] prose-h2:text-black prose-h2:text-opacity-80 prose-h4:mt-5 prose-h4:mb-2 prose-h4:text-2xl prose-h4:uppercase prose-h4:text-black prose-h4:text-opacity-80 prose-p:mb-4 prose-a:text-primary prose-a:underline md:prose-h2:text-[2.75rem] md:prose-h2:leading-tight md:prose-h4:text-3xl">
        <h2>
          <span>More Info for 2017 Roadtrek RS ETREK DP160171</span>
        </h2>
        <div className="clearfix">
          <div className="quick-quote-text">
            <span style={{ fontWeight: 'bold' }}>For a Quick Quote Call:</span>{' '}
            <a href="tel:8336141693">833-614-1693</a>
          </div>
        </div>
        <div className="mt-8">
          <form
            action="/RecVanSearch/Email"
            method="post"
            style={{ width: '100%' }}
            noValidate="novalidate"
            cr-attached="true"
            className="grid grid-cols-2 gap-x-8 gap-y-4"
          >
            <h4 className="col-span-full">Personal Information</h4>
            <div className="col-span-full">
              <FormControl
                label="First name"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Last name"
                required
                inputProps={{
                  id: 'LastName',
                  name: 'LastName',
                  type: 'text',
                }}
              />
            </div>
            <h4 className="col-span-full">Contact Information</h4>
            <div className="col-span-full">
              <FormControl
                label="Telephone"
                inputProps={{
                  id: 'Telephone',
                  name: 'Telephone',
                  placeholder: '(000) 000-0000',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Mobile Phone"
                inputProps={{
                  id: 'MobilePhone',
                  name: 'MobilePhone',
                  placeholder: '(000) 000-0000',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Email"
                required
                inputProps={{
                  id: 'Email',
                  name: 'Email',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Zip code"
                required
                inputProps={{
                  id: 'ZipCode',
                  name: 'ZipCode',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Comments"
                inputProps={{
                  id: 'Comments',
                  name: 'Comments',
                  type: 'textarea',
                }}
              />
            </div>

            <div>
              <div className="col-sm-12">
                <div className="labelDiv">
                  <label htmlFor="Comments">Comments</label>
                </div>
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <textarea
                    className="lmrv-input form-control"
                    cols={30}
                    id="Comments"
                    name="Comments"
                    rows={6}
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div
                  className="required-indicator"
                  style={{ marginBottom: 10 }}
                >
                  <span className="alert-element">*</span> - Indicates a
                  required field
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="mt-4 mb-4 btn btn-primary"
              defaultValue="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
