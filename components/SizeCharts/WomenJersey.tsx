const WomenJersey = () => {
  return (
    <table className="w-full mt-12 lg:w-7/12 lg:mx-auto">
      <thead className="bg-tableGray border-b">
        <tr className="text-xs font-extralight">
          <th>Size</th>
          <th>Height(cm)</th>
          <th>Weight(kg)</th>
          <th>Clothing Lenght(cm)</th>
          <th>Bust(cm)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>S</td>
          <td>140-150</td>
          <td>74</td>
          <td>63</td>
          <td>84</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>M</td>
          <td>150-160</td>
          <td>78</td>
          <td>65</td>
          <td>88</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>L</td>
          <td>160-170</td>
          <td>82</td>
          <td>67</td>
          <td>92</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>XL</td>
          <td>170-175</td>
          <td>86</td>
          <td>69</td>
          <td>96</td>
        </tr>
      </tbody>
    </table>
  );
};
export default WomenJersey;
