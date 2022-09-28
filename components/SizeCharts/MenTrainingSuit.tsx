const MenTrainingSuit = () => {
  return (
    <table className="w-full mt-12 lg:w-7/12 lg:mx-auto">
      <thead className="bg-tableGray border-b">
        <tr className="text-xs font-extralight">
          <th>Size</th>
          <th>
            Height <br />
            (cm)
          </th>
          <th>
            Weight <br />
            (kg)
          </th>
          <th>Clothing Lenght(cm)</th>
          <th>Bust(cm)</th>
          <th>Shoulder Width(cm)</th>
          <th>Pants Length(cm)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>S</td>
          <td>161-170</td>
          <td>50-67</td>
          <td>67</td>
          <td>96</td>
          <td>74.5</td>
          <td>98</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>M</td>
          <td>171-176</td>
          <td>62-75</td>
          <td>70</td>
          <td>100</td>
          <td>76</td>
          <td>101</td>
        </tr>
        <tr className="text-center h-12 border-b bg-neutral-100 hover:font-bold">
          <td>L</td>
          <td>176-182</td>
          <td>70-80</td>
          <td>72</td>
          <td>104</td>
          <td>77.5</td>
          <td>104</td>
        </tr>
        <tr className="text-center h-12 border-b hover:font-bold">
          <td>XL</td>
          <td>182-190</td>
          <td>81-90</td>
          <td>74</td>
          <td>106</td>
          <td>79</td>
          <td>107</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MenTrainingSuit;
