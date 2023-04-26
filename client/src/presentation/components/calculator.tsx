//rafc

import { Button, Label, Select, TextInput } from "flowbite-react";

export const Calculator = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="basis-4/12">
        <form className="flex flex-col gap-4">
          <div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Select your currency" />
              </div>
              <Select id="countries" required={true}>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Amount" />
            </div>
            <TextInput id="password1" type="number" required={true} />
          </div>
          <Button type="submit">Calcular</Button>
        </form>
      </div>
      <div className="basis-4/12">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="https://cdn.pixabay.com/photo/2021/04/30/16/47/btc-logo-6219386_1280.png"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bitcoin
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Annual profit for a monthly return of 5%
          </span>
          <div className="mt-4 flex border rounded-md px-4 py-3">
           458964559595959
          </div>
        </div>
      </div>
    </div>
  );
};
